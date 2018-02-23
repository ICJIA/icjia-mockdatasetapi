var schema = {
  type: "object",
  properties: {
    datasets: {
      type: "array",
      minItems: 70,
      maxItems: 75,
      items: {
        type: "object",
        properties: {
          id: {
            type: "number",
            unique: true,
            minimum: 1
          },
          updated: {
            type: "string",
            faker: "date.recent"
          },
          created: {
            type: "string",
            faker: "date.past"
          },
          documentationLink: {
            type: "string",
            chance: "url"
          },
          embedCode: {
            type: "string",
            chance: "url"
          },
          sourceLink: {
            type: "string",
            chance: "url"
          },
          timePeriod: {
            type: "string",
            faker: "lorem.sentence"
          },
          category: {
            type: "string",
            chance: {
              pickone: [["Drug", "Property", "Violent"]]
            }
          },

          type: {
            type: "string",
            chance: {
              pickone: [["R", "Highcharts", "Tableau", "custom", "Web"]]
            }
          },
          title: {
            type: "string",
            faker: {
              "lorem.words": [5]
            }
          },
          shortDescription: {
            type: "string",
            faker: {
              "lorem.sentences": [2]
            }
          },
          fullDescription: {
            type: "string",
            faker: {
              "lorem.paragraphs": [4]
            }
          },
          tags: {
            type: "array",
            chance: {
              pickset: [
                [
                  "crime",
                  "population",
                  "county",
                  "state",
                  "city",
                  "cook",
                  "opioid"
                ],
                2
              ]
            }
          }
        },
        required: [
          "id",
          "updated",
          "created",
          "documentationLink",
          "embedCode",
          "sourceLink",
          "timePeriod",
          "category",
          "type",
          "title",
          "shortDescription",
          "fullDescription",
          "tags"
        ]
      }
    }
  },
  required: ["datasets"]
};

module.exports = schema;
