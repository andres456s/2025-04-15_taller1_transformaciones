using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;
using System.IO;

public class ObjectSpawner : MonoBehaviour
{
    [Header("Opciones")]
    public int numberOfObjects = 10;
    public Transform parent;

    [Header("UI")]
    public Button regenerateButton;
    public Button exportButton;

    private List<GameObject> spawnedObjects = new List<GameObject>();
    private List<ObjectData> objectDataList = new List<ObjectData>();

    [System.Serializable]
    public class ObjectData
    {
        public Vector3 position;
        public string type;
        public Color color;
        public float scale;
    }

    void Start()
    {
        regenerateButton.onClick.AddListener(RegenerateScene);
        exportButton.onClick.AddListener(ExportToJson);
        GenerateObjects();
    }

    void GenerateObjects()
    {
        ClearScene();
        objectDataList.Clear();

        for (int i = 0; i < numberOfObjects; i++)
        {
            Vector3 pos = new Vector3(Random.Range(-5, 5), 0, Random.Range(-5, 5));

            string type = (i % 3 == 0) ? "Sphere" : (i % 3 == 1) ? "Cube" : "Cylinder";
            Color color = (i % 2 == 0) ? Color.red : Color.green;
            float scale = 1f + 0.5f * (i % 3);

            GameObject obj = CreatePrimitive(type);
            obj.transform.position = pos;
            obj.transform.localScale = Vector3.one * scale;
            obj.GetComponent<Renderer>().material.color = color;
            obj.transform.SetParent(parent);

            spawnedObjects.Add(obj);
            objectDataList.Add(new ObjectData { position = pos, type = type, color = color, scale = scale });
        }
    }

    GameObject CreatePrimitive(string type)
    {
        switch (type)
        {
            case "Sphere": return GameObject.CreatePrimitive(PrimitiveType.Sphere);
            case "Cube": return GameObject.CreatePrimitive(PrimitiveType.Cube);
            case "Cylinder": return GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            default: return GameObject.CreatePrimitive(PrimitiveType.Cube);
        }
    }

    void ClearScene()
    {
        foreach (var obj in spawnedObjects)
        {
            Destroy(obj);
        }
        spawnedObjects.Clear();
    }

    void RegenerateScene()
    {
        GenerateObjects();
    }

    void ExportToJson()
    {
        string json = JsonUtility.ToJson(new ObjectListWrapper { objects = objectDataList }, true);
        string path = Path.Combine(Application.persistentDataPath, "scene_data.json");
        File.WriteAllText(path, json);
        Debug.Log("Exported JSON to: " + path);
    }

    [System.Serializable]
    public class ObjectListWrapper
    {
        public List<ObjectData> objects;
    }
}
