import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const getModules = async (to: any, from: any, next: any) =>  {
  to.meta.modules = [{
    type: 'module',
    data: {
      id: 1,
      name: 'Computer science',
      description: 'A Computer Science course covers the fundamentals of computing, programming, and problem-solving. Students learn about algorithms, data structures, software development, computer systems, and the principles behind how computers process information. The course also explores topics like artificial intelligence, databases, networking, and cybersecurity, providing the skills needed for careers in technology, software engineering, and research.',
      imagePath: 'https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg',
      moduleType: 'lesson',
      duration: '400',
      createdAt: '2024-12-03T14:30:00.000Z',
      updatedAt: '2024-12-03T11:30:00.000Z',
    },
    context: {
      status: 'completed',
      complete: true,
      completedAt: '2024-12-03T14:30:00.000Z'
    }
  },
    {
      type: 'module',
      data: {
        id: 2,
        name: 'Computer science 2',
        description: 'A Computer Science course covers the fundamentals of computing, programming, and problem-solving. Students learn about algorithms, data structures, software development, computer systems, and the principles behind how computers process information. The course also explores topics like artificial intelligence, databases, networking, and cybersecurity, providing the skills needed for careers in technology, software engineering, and research.',
        imagePath: 'https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg',
        moduleType: 'survey',
        duration: '630',
        createdAt: '2024-12-03T14:30:00.000Z',
        updatedAt: '2024-12-03T05:30:00.000Z',
      },
      context: {
        status: 'pending',
        complete: false,
        completedAt: null
      }
    },
    {
      type: 'module',
      data: {
        id: 3,
        name: 'Computer science 3',
        description: 'A Computer Science course covers the fundamentals of computing, programming, and problem-solving. Students learn about algorithms, data structures, software development, computer systems, and the principles behind how computers process information. The course also explores topics like artificial intelligence, databases, networking, and cybersecurity, providing the skills needed for careers in technology, software engineering, and research.',
        imagePath: 'https://www.edinburghcollege.ac.uk/media/c5ghakxe/pexels-tirachard-kumtanom-733856.jpg?center=0.40242891032492345,0.50277250251192762&mode=crop&quality=80&width=780&height=400&rnd=132717830764430000',
        moduleType: 'quiz',
        duration: '340',
        createdAt: '2024-12-03T14:30:00.000Z',
        updatedAt: '2024-12-03T10:12:00.000Z',
      },
      context: {
        status: 'incomplete',
        complete: false,
        completedAt: null
      }
    },
    {
      type: 'module',
      data: {
        id: 4,
        name: 'Computer science 4',
        description: 'A Computer Science course covers the fundamentals of computing, programming, and problem-solving. Students learn about algorithms, data structures, software development, computer systems, and the principles behind how computers process information. The course also explores topics like artificial intelligence, databases, networking, and cybersecurity, providing the skills needed for careers in technology, software engineering, and research.',
        imagePath: 'https://www.ox.ac.uk/sites/files/oxford/Choosing-an-Oxford-course.jpg',
        moduleType: 'lesson',
        duration: '350',
        createdAt: '2024-12-03T14:30:00.000Z',
        updatedAt: '2024-12-03T11:50:00.000Z',
      },
      context: {
        status: 'completed',
        complete: true,
        completedAt: '2024-12-03T14:30:00.000Z'
      }
    },
    {
      type: 'module',
      data: {
        id: 5,
        name: 'Computer science 5',
        description: 'A Computer Science course covers the fundamentals of computing, programming, and problem-solving. Students learn about algorithms, data structures, software development, computer systems, and the principles behind how computers process information. The course also explores topics like artificial intelligence, databases, networking, and cybersecurity, providing the skills needed for careers in technology, software engineering, and research.',
        imagePath: 'https://www.iaea.org/sites/default/files/styles/original_image_size/public/e-learning-v1.jpg?itok=hu4F8Lpr',
        moduleType: 'lesson',
        duration: '500',
        createdAt: '2024-12-03T14:30:00.000Z',
        updatedAt: '2024-12-03T11:30:00.000Z',
      },
      context: {
        status: 'locked',
        complete: false,
        completedAt: null
      }
    }]
  next()
}

const getEvents = async (to: any, from: any, next: any) =>  {
  to.meta.events = [{
    type: 'event',
    data: {
      id: 1,
      name: 'Forum',
      description: 'A Computer Science Forum is an online platform where students, professionals, and enthusiasts can discuss topics related to computing, programming, algorithms, software development, and emerging technologies. It provides a space for sharing knowledge, solving problems, and staying updated on the latest trends in the field of computer science.',
      imagePath: 'https://pbs.twimg.com/media/F9yYPQ5XYAAl6kP.jpg:large',
      location: 'London',
      startDate: '2024-12-03T12:00:00.000Z',
      endDate: '2024-12-05T12:00:00.000Z',
      signupDeadline: '2024-12-02T12:00:00.000Z',
      createdAt: '2024-12-01T12:00:00.000Z',
      updatedAt: '2024-12-01T12:00:00.000Z',
    },
    context: {
      status: 'attended',
      complete: false,
      completedAt: null
    }
  },
    {
      type: 'event',
      data: {
        id: 2,
        name: 'Forum 2',
        description: 'A Computer Science Forum is an online platform where students, professionals, and enthusiasts can discuss topics related to computing, programming, algorithms, software development, and emerging technologies. It provides a space for sharing knowledge, solving problems, and staying updated on the latest trends in the field of computer science.',
        imagePath: 'https://www.shutterstock.com/image-vector/forum-text-on-coloured-speech-260nw-2024352626.jpg',
        location: 'London',
        startDate: '2024-12-03T12:00:00.000Z',
        endDate: '2024-12-05T12:00:00.000Z',
        signupDeadline: '2024-12-02T12:00:00.000Z',
        createdAt: '2024-12-01T12:00:00.000Z',
        updatedAt: '2024-12-01T12:00:00.000Z',
      },
      context: {
        status: 'attending',
        complete: false,
        completedAt: null
      }
    },
    {
      type: 'event',
      data: {
        id: 3,
        name: 'Forum 3',
        description: 'A Computer Science Forum is an online platform where students, professionals, and enthusiasts can discuss topics related to computing, programming, algorithms, software development, and emerging technologies. It provides a space for sharing knowledge, solving problems, and staying updated on the latest trends in the field of computer science.',
        imagePath: 'https://www.seoclerk.com/pics/000/172/407/ed60b482f375db4b0a390cff292ea20c.jpg',
        location: 'London',
        startDate: '2024-12-03T12:00:00.000Z',
        endDate: '2024-12-05T12:00:00.000Z',
        signupDeadline: '2024-12-02T12:00:00.000Z',
        createdAt: '2024-12-01T12:00:00.000Z',
        updatedAt: '2024-12-01T12:00:00.000Z',
      },
      context: {
        status: 'invited',
        complete: false,
        completedAt: null
      }
    },
    {
      type: 'event',
      data: {
        id: 4,
        name: 'Forum 4',
        description: 'A Computer Science Forum is an online platform where students, professionals, and enthusiasts can discuss topics related to computing, programming, algorithms, software development, and emerging technologies. It provides a space for sharing knowledge, solving problems, and staying updated on the latest trends in the field of computer science.',
        imagePath: 'https://i0.wp.com/pouchsupport.org/wp-content/uploads/2020/06/Join-Forum.jpg?fit=1000%2C1000&ssl=1',
        location: 'London',
        startDate: '2024-12-03T12:00:00.000Z',
        endDate: '2024-12-05T12:00:00.000Z',
        signupDeadline: '2024-12-02T12:00:00.000Z',
        createdAt: '2024-12-01T12:00:00.000Z',
        updatedAt: '2024-12-01T12:00:00.000Z',
      },
      context: {
        status: 'declined',
        complete: false,
        completedAt: null
      }
    },
    {
      type: 'event',
      data: {
        id: 5,
        name: 'Forum 5',
        description: 'A Computer Science Forum is an online platform where students, professionals, and enthusiasts can discuss topics related to computing, programming, algorithms, software development, and emerging technologies. It provides a space for sharing knowledge, solving problems, and staying updated on the latest trends in the field of computer science.',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquBvJetjHsU8WJ8MNLsQ4IRt9nbZdqCquew&s',
        location: 'London',
        startDate: '2024-12-03T12:00:00.000Z',
        endDate: '2024-12-05T12:00:00.000Z',
        signupDeadline: '2024-12-02T12:00:00.000Z',
        createdAt: '2024-12-01T12:00:00.000Z',
        updatedAt: '2024-12-01T12:00:00.000Z',
      },
      context: {
        status: 'attended',
        complete: false,
        completedAt: null
      }
    }]
  next()
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/modules',
      name: 'modules',
      component: () => import('../views/ModulesView.vue'),
      beforeEnter: getModules
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
      beforeEnter: getEvents
    },
  ],
})

export default router
