/**
 * @
 * @description This is a default data to display in the main page of the app
 * @type {Object}
 */

export const defaultUserData = [
  {
    data: {
      id: 12,
      userInfos: {
        firstName: 'Matheus',
        lastName: 'Cristofoli',
        age: 24,
      },
      todayScore: 1,
      keyData: {
        calorieCount: 1930,
        proteinCount: 255,
        carbohydrateCount: 300,
        lipidCount: 10,
      },
    },
  },
]
export const defaultUserActivity = [
  {
    data: {
      userId: 1,
      sessions: [
        {
          day: '2020-07-01',
          kilogram: 80,
          calories: 240,
        },
        {
          day: '2020-07-02',
          kilogram: 80,
          calories: 220,
        },
        {
          day: '2020-07-03',
          kilogram: 81,
          calories: 280,
        },
        {
          day: '2020-07-04',
          kilogram: 81,
          calories: 290,
        },
        {
          day: '2020-07-05',
          kilogram: 80,
          calories: 160,
        },
        {
          day: '2020-07-06',
          kilogram: 78,
          calories: 162,
        },
        {
          day: '2020-07-07',
          kilogram: 76,
          calories: 390,
        },
      ],
    },
  },
]
export const defaultAverageSession = [
  {
    data: {
      userId: 1,
      sessions: [
        {
          day: 1,
          sessionLength: 60,
        },
        {
          day: 2,
          sessionLength: 30,
        },
        {
          day: 3,
          sessionLength: 45,
        },
        {
          day: 4,
          sessionLength: 55,
        },
        {
          day: 5,
          sessionLength: 15,
        },
        {
          day: 6,
          sessionLength: 15,
        },
        {
          day: 7,
          sessionLength: 50,
        },
      ],
    },
  },
]

export const defaultUserPerformance = {
  data: {
    userId: 1,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      {
        value: 20,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
}
