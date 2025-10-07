const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// GET THE HTML ELEMENT
const container = document.querySelector("#software-courses");
const buttons = document.querySelectorAll("#student-courses button");
const totalCreditsElement = document.querySelector("#total-credits"); // un span o div para mostrar créditos

// Función para mostrar los cursos
function showCourses(list) {
  container.innerHTML = ""; // limpiar
  let totalCredits = 0;

  list.forEach(c => {
    const btn = document.createElement("button");
    btn.type = "button"; // accesibilidad
    btn.textContent = `${c.subject} ${c.number} - ${c.title}`;
    btn.setAttribute("aria-label", `${c.subject} ${c.number} - ${c.title}`);

    // Asignar clase según completado
    //Asigna colores segun las materias
    if (c.completed) {
      btn.classList.add("completed");
    } else {
      btn.classList.add("not-completed");
    }

    container.appendChild(btn);

    // ShowModal(c);

    btn.addEventListener("click", () => {
      ShowModal(c);
    });

    // Sumar créditos
    totalCredits += c.credits;
  });

  // Mostrar créditos totales
  if (totalCreditsElement) {
    totalCreditsElement.textContent = `Créditos totales: ${totalCredits}`;
  }
}

let activeFilter = null;

// Evento de filtrado
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.value.toLowerCase();

    if (activeFilter === filter) {
      container.innerHTML = ""; // limpiar cursos
      totalCreditsElement.textContent = ""; // limpiar créditos
      activeFilter = null; // ningún filtro activo
      return;
    }

    if (filter === "all") {
      showCourses(courses);
    } else {
      showCourses(courses.filter(c => c.subject.toLowerCase() === filter));
    }

    //HACER MAGIA
    activeFilter = filter;
  });
});

function ShowModal(course) {

  // Create Modal
  const modal = document.createElement("dialog");
  modal.classList.add("course-dialog");

  // HTML CONTENT
  modal.innerHTML = `
  <div>
  <h2>${course.title}</h2>
  <button id="close-btn">X</button>
  </div>
  <p>${course.credits} credits</p>
  <p>Certificate: ${course.certificate}</p>
  <p>${course.description}</p>
  <p>Technology: ${course.technology}</p>
  `;
  
  document.body.appendChild(modal);
  
  modal.showModal();
  
  const closeBtn = document.querySelector("#close-btn");


  closeBtn.addEventListener("click", () => {
    modal.close();
    modal.remove();
  });


  
};