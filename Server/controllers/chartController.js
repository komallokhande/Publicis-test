const express = require('express');
const router = express.Router();


router.get('/:type', (req, res) => {
    let type = req.params.type;
    return res.status(200).send({'values': getValues(type), "highOrderValues": getHighOrderValues(type)});
});

function getHighOrderValues(type) {
    let highOrderdata = [];
    if(type === 'female') {
        highOrderdata = [
            {
                "displayValue": "Self Transcendence",
                "value": "4.2"
            },
            {
                "displayValue": "Openness to Change",
                "value": "3.8"
            },
            {
                "displayValue": "Self Enhancement",
                "value": "2.8"
            },
            {
                "displayValue": "Conservation",
                "value": "3.7"
            }
        ]
    } else {
        highOrderdata = [
            {
                "displayValue": "Self Transcendence",
                "value": "3.2"
            },
            {
                "displayValue": "Openness to Change",
                "value": "4.5"
            },
            {
                "displayValue": "Self Enhancement",
                "value": "2.6"
            },
            {
                "displayValue": "Conservation",
                "value": "3.7"
            }
        ]
    }

    return highOrderdata;
}

function getValues(type) {
    let valuesData = [];
    if(type === 'female') {
        valuesData = [
            {
              displayValue: "Humility",
              value: "3.9"
            },
            {
              displayValue: "Nature",
              value: "3.8"
            },
            {
              displayValue: "Concern",
              value: "4.1"
            },
            {
              displayValue: "Tolerance",
              value: "4"
            },
            {
              displayValue: "Caring",
              value: "4.3"
            },
            {
              displayValue: "Dependability",
              value: "4.2"
            },
            {
              displayValue: "Thought",
              value: "4.2"
            },
            {
              displayValue: "Action",
              value: "4"
            },
            {
              displayValue: "Simulation",
              value: "3.5"
            },
            {
              displayValue: "Hedonism",
              value: "3.9"
            },
            {
              displayValue: "Achievement",
              value: "3.3"
            },
            {
              displayValue: "Dominance",
              value: "2.7"
            },
            {
              displayValue: "Resources",
              value: "2.5"
            },
            {
              displayValue: "Face",
              value: "3.6"
            },
            {
              displayValue: "Personal",
              value: "4.2"
            },
            {
              displayValue: "Societal",
              value: "4.1"
            },
            {
              displayValue: "Tradition",
              value: "3.5"
            },
            {
              displayValue: "Rules",
              value: "3.9"
            },
            {
              displayValue: "Interpersonal",
              value: "3.6"
            }
          ]
    } else {
        valuesData = [
            {
              displayValue: "Humility",
              value: "3.1"
            },
            {
              displayValue: "Nature",
              value: "4.2"
            },
            {
              displayValue: "Concern",
              value: "2.9"
            },
            {
              displayValue: "Tolerance",
              value: "3.5"
            },
            {
              displayValue: "Caring",
              value: "3.1"
            },
            {
              displayValue: "Dependability",
              value: "3.7"
            },
            {
              displayValue: "Thought",
              value: "4.5"
            },
            {
              displayValue: "Action",
              value: "2.4"
            },
            {
              displayValue: "Simulation",
              value: "3.9"
            },
            {
              displayValue: "Hedonism",
              value: "3.3"
            },
            {
              displayValue: "Achievement",
              value: "4.3"
            },
            {
              displayValue: "Dominance",
              value: "2.7"
            },
            {
              displayValue: "Resources",
              value: "2.5"
            },
            {
              displayValue: "Face",
              value: "3.6"
            },
            {
              displayValue: "Personal",
              value: "4.2"
            },
            {
              displayValue: "Societal",
              value: "4.1"
            },
            {
              displayValue: "Tradition",
              value: "3.2"
            },
            {
              displayValue: "Rules",
              value: "2.9"
            },
            {
              displayValue: "Interpersonal",
              value: "3.1"
            }
          ]
    }

    return valuesData;
}

module.exports = router;