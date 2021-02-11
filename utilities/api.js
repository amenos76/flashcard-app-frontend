const initialData = {
  decks: [
      {
      id: 100,
      name: "Math",
      cards: [
        {
          id: 1,
          question: 'What is 2 + 2?',
          answer: '4',
        },
        {
          id: 2,
          question: 'What is 1 + 2?',
          answer: '3',
        },
        {
          id: 3,
          question: 'What is 10 + 10?',
          answer: '20',
        },
      ]
    },
    {
      id: 10000,
      name: "Programming",
      cards: [
        {
          id: 1,
          question: 'What is a function?',
          answer: 'A function is funky, baby!',
        },
        {
          id: 2,
          question: 'What is an array?',
          answer: 'Brackets, son.',
        },
        {
          id: 3,
          question: 'What is an object?',
          answer: 'Yo mama is an object!',
        },
      ]
    },
    {
      id: 2000,
      name: "Animals",
      cards: [
        {
          id: 1,
          question: 'Can a bird fly?',
          answer: 'Yes',
        },
        {
          id: 2,
          question: 'What sound does a dog make?',
          answer: 'WOOF',
        },
        {
          id: 3,
          question: 'Elephants are known for their ____?',
          answer: 'Trunk',
        },
        {
          id: 4,
          question: 'Many scientists now believe ____ are descendants of dinosaurs?',
          answer: 'Birds',
        },
      ]
    },
    {
      id: 50,
      name: "Science",
      cards: [
        {
          id: 1,
          question: 'Anatomy',
          answer: 'The structure of an animal or plant, or of any of its parts.',
        },
        {
          id: 2,
          question: 'Atoms',
          answer: 'The basic unit of matter consisting of a dense central nucleus surrounded by a cloud of negatively charged electrons.',
        },
        {
          id: 3,
          question: 'Attributes',
          answer: 'A characteristic of a thing.',
        },
        {
          id: 4,
          question: 'Asexual reproduction',
          answer: 'Involves one parent and leads to offspring that are genetically identical to the parent and to one another.',
        },
      ]
    },
    {
      id: 51,
      name: "Social Studies",
      cards: [
        {
          id: 1,
          question: 'Constitution',
          answer: '1787',
        },
        {
          id: 2,
          question: 'Civil War',
          answer: '1861-1865',
        },
        {
          id: 3,
          question: 'Lexington, Mass. 1775',
          answer: 'first shots of American Rev.',
        },
        {
          id: 4,
          question: 'Battle of Saratoga',
          answer: 'turning point of American Rev.',
        },
      ]
    },
  ]
}

export const getData = () => {
  return initialData
}