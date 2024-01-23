const initialRoomsState = 
{
  "rooms": [
    { 
      "name":"5A101",
      "categories": [
        {
          "name": "Työskentely",
          "observations": [
            {
              "name":"Suojaimet, vaatetus, riskinotto",
              "inOrder": 1,
              "exceptions": [
                /* {
                  "description":"Test 1"
                },
                {
                  "description":"Test 2"
                } */
              ]
            } 
          ]
        },
        {
          "name": "Ergonomia",
          "observations": [
            {
              "name":"Fyysinen kuormitus",
              "inOrder": 2,
              "exceptions": []
            },
            {
              "name":"Työpisteen ja välineiden ergonomia",
              "inOrder": 3,
              "exceptions":[]
            } 
          ] 
        },
        {
          "name": "Kone- ja laiteturvallisuus",
          "observations":[
            {
              "name":"Koneiden kunto ja suojalaitteet",
              "inOrder": 0,
              "exceptions": []
            },
            {
              "name":"Koneiden hallintalaitteet ja merkintä",
              "inOrder": 0,
              "exceptions": []
            }
          ]
        },

      ] 
    },
    { 
      "name":"5A102",
      "categories": [
        {
          "name": "Työskentely",
          "observations": [
            {
              "name":"Suojaimet, vaatetus, riskinotto",
              "inOrder": 0,
              "exceptions": []
            }
          ]
        },
        {
          "name": "Ergonomia",
          "observations": [
            {
              "name":"Fyysinen kuormitus",
              "inOrder": 0,
              "exceptions": []
            },
            {
              "name":"Työpisteen ja välineiden ergonomia",
              "inOrder": 0,
              "exceptions":[]
            } 
          ]
        },
        {
          "name": "Kone- ja laiteturvallisuus",
          "observations":[
            {
              "name":"Koneiden kunto ja suojalaitteet",
              "inOrder": 0,
              "exceptions": []
            },
            {
              "name":"Koneiden hallintalaitteet ja merkintä",
              "inOrder": 0,
              "exceptions": []
            }
          ]
        },
      ] 
    }
  ]
}

export {
  initialRoomsState
}