export const defaults = {
  personalInformation: {
    id: crypto.randomUUID(),
    firstName: "John",
    lastName: "Doe",
    title: "Fullstack Web Dev",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eveniet dolorum dolores, placeat possimus repudiandae iusto sequi commodi expedita, recusandae deleniti. Tempore incidunt facilis fugit provident voluptatem repellendus et quidem.",
    email: "johndoe@email.com",
    phone: "5554443322",
    portfolio: "github.com/johndoe",
    shortAddress: "London, UK",
  },
  experienceInformation: [
    {
      id: crypto.randomUUID(),
      company: "Xyz Software Solutions",
      position: "Intern",
      description: "orem ipsum dolor, sit amet consecteur adipisicing elit.",
      startYear: "2015",
      endYear: "2016",
    },
    {
      id: crypto.randomUUID(),
      company: "Abc Corp.",
      position: "Frontend Web Dev",
      description: "Lorem ipsum dolor, sit amet consecteur adipisicing elit.",
      startYear: "2016",
      endYear: "2019",
    },
    {
      id: crypto.randomUUID(),
      company: "Fitbit Agency",
      position: "Fullstack Developer",
      description: "Lorem ipsum dolor, sit amet consecteur adipisicing elit.",
      startYear: "2019",
      endYear: "2024",
    },
  ],
  educationInformation: [
    {
      id: crypto.randomUUID(),
      institution: "Harvard University",
      program: "Linguistics",
      startYear: "2012",
      endYear: "2016",
    },
    {
      id: crypto.randomUUID(),
      institution: "MIT",
      program: "Software Engineering",
      startYear: "2017",
      endYear: "2022",
    },
  ],
};
