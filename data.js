var APP_DATA = {
  "scenes": [
    {
      "id": "0-start",
      "name": "Start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.32754137295373553,
          "pitch": 0.24794892492015919,
          "rotation": 1.5707963267948966,
          "target": "3-black"
        },
        {
          "yaw": -1.162077605362624,
          "pitch": 0.3256107766587757,
          "rotation": 0,
          "target": "4-main"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-white",
      "name": "White",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5375787305346655,
          "pitch": 0.21056008378402602,
          "rotation": 4.71238898038469,
          "target": "4-main"
        },
        {
          "yaw": -0.10772067525678963,
          "pitch": 0.3140039556404144,
          "rotation": 3.141592653589793,
          "target": "2-gold"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-gold",
      "name": "Gold",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7351750460897044,
        "pitch": 0.162140368574601,
        "fov": 1.3918202015316714
      },
      "linkHotspots": [
        {
          "yaw": 1.5326116088735677,
          "pitch": 0.3029623983943406,
          "rotation": 0,
          "target": "4-main"
        },
        {
          "yaw": 0.05557664001918283,
          "pitch": 0.4328412618918822,
          "rotation": 3.141592653589793,
          "target": "1-white"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-black",
      "name": "Black",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2349309187611262,
          "pitch": 0.3897116824384952,
          "rotation": 0,
          "target": "0-start"
        },
        {
          "yaw": 2.0128366454295366,
          "pitch": 0.26927208462708485,
          "rotation": 1.5707963267948966,
          "target": "4-main"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main",
      "name": "Main",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04393878355820213,
          "pitch": 0.2431698131546156,
          "rotation": 0.7853981633974483,
          "target": "2-gold"
        },
        {
          "yaw": -0.11599686355499372,
          "pitch": 0.30600677307347546,
          "rotation": 3.9269908169872414,
          "target": "1-white"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
