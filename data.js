const data = [
  {
    id: 49802390484,
    numLikes: 1500,
    numComments: 4,
    title: "Peanut Butter Banana Smoothie",
    user: {
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      username: "billybob",
    },
    recipeVideo:
      "https://res.cloudinary.com/mikebilyeuimg/video/upload/q_75/v1620928855/Recipes/pexels-shvets-production-7199062_1.mp4",
    recipeImage:
      "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1603140916/Recipes/lp4ypoiaoqkvvzkp7qk5.jpg",
    recipeYield: 4,
    ingredientList: [
      {
        amount: "2",
        ingredient: "Bananas, broken into chunks",
        image:
          "https://images.albertsons-media.com/is/image/ABS/184060007?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
      },
      {
        amount: "2 cups",
        ingredient: "Milk",
        image:
          "https://images.albertsons-media.com/is/image/ABS/136010121?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
      },
      {
        amount: "½ cup",
        ingredient: "Peanut butter",
        image:
          "https://images.albertsons-media.com/is/image/ABS/204100025?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
      },
      {
        amount: "2 Tbsp",
        ingredient: "Honey, to taste",
        image:
          "https://images.albertsons-media.com/is/image/ABS/960123341?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
      },
      {
        amount: "2 cups",
        ingredient: "Ice cubes",
        image:
          "https://images.albertsons-media.com/is/image/ABS/960049453?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
      },
    ],
    instructions: [
      `Place bananas, milk, peanut butter, honey, and ice cubes in a blender; blend until smooth, about 30 seconds.`,
    ],
    nutrition: {
      calories: 275,
      protiens: "8g",
      fats: "10g",
      carbs: "26g",
    },
    comments: [
      {
        id: 96675000333,
        comment: "Nice, I'm sharing this recipe with everyone.",
        user: {
          id: 324832904,
          username: "zipiwhiskuser943",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
        },
        parent_comment_id: null,
        childComments: null,
        numLikes: 4,
        liked: true,
        created_at: "2021-01-19T19:58:38-05:00",
      },
      {
        id: 8977856576,
        comment:
          "I made this last night and Loved it! Combine the flour and pepper in a bowl, add the beef and toss to coat well.",
        user: {
          id: 908432908423,
          username: "mikeb",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        parent_comment_id: null,
        childComments: [
          {
            id: 7987987897897,
            comment: `@mikeb I'm gonna make this ASAP, Combine the flour and pepper in a bowl, add the beef and toss to coat well.`,
            user: {
              id: 324832904,
              username: "joe94",
              image: "https://randomuser.me/api/portraits/men/10.jpg",
            },
            parent_comment_id: 8977856576,
            childComments: null,
            numLikes: 1,
            liked: false,
            created_at: "2021-01-20T19:58:38-05:00",
          },
        ],
        numLikes: 0,
        liked: false,
        created_at: "2021-01-20T19:50:38-05:00",
      },
      {
        id: 786876844,
        comment: "Nice!",
        user: {
          id: 940894823,
          username: "davesmith",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
        },

        childComments: null,
        numLikes: 0,
        liked: false,
        created_at: "2021-01-05T19:58:38-05:00",
      },
    ],
  },
  {
    id: 193243290423,
    numLikes: 3903,
    numComments: 1,
    title: "Cranberry Sauce",
    user: {
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      username: "jackie93",
    },
    recipeVideo:
      "https://res.cloudinary.com/mikebilyeuimg/video/upload/q_75/v1620512318/Recipes/pexels-kampus-production-6603824.mp4",
    recipeImage:
      "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1603140674/Recipes/atlhfcivnnrdwprukcfd.jpg",
    recipeYield: 4,
    ingredientList: [
      {
        amount: "¼ cup",
        ingredient: "All-purpose flour",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmaF1M32DN3r7ciBu7pGxbv_jGrBq-6vlfc8F_JZlyJY8lfcFK59_LaCp0Ac_p52crRxruIi5&usqp=CAc",
      },
      {
        amount: "1 Tbsp + 2 tsp",
        ingredient: "Vegatable oil ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WIIweap2Y7yXbnNS8qTVs5kI_HRDX9WlpzYTy8M12YBFwR20vfVL2zpRwc4&usqp=CAc",
      },
      {
        amount: "1 cup",
        ingredient: "Red wine",
        image: "https://images.heb.com/is/image/HEBGrocery/000538201",
      },
      {
        amount: "2",
        ingredient: "Bay leaves",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/37/Indian_bay_leaf_-_tejpatta_-_indisches_Lorbeerblatt.jpg",
      },
    ],
    instructions: [
      `Combine the flour and pepper in a bowl, add the beef and toss to coat well. `,
      `Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches.`,
      `Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer.`,
    ],
    nutrition: {
      calories: 275,
      protiens: "8g",
      fats: "10g",
      carbs: "26g",
    },
    comments: [
      {
        id: 96967543934333,
        comment: "Nice, I'm sharing this recipe with everyone.",
        user: {
          id: 324832904,
          username: "zipiwhiskuser943",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
        },
        parent_comment_id: null,
        childComments: null,
        numLikes: 4,
        liked: true,
        created_at: "2021-01-19T19:58:38-05:00",
      },
    ],
  },
  {
    id: 1932290423,
    numLikes: 3903,
    numComments: 1,
    title: "Guacamole",
    user: {
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      username: "jess",
    },
    recipeImage:
      "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1602904544/Recipes/fpx1wp8y8asygg8oymfx.jpg",
    recipeYield: 4,
    ingredientList: [
      {
        amount: "¼ cup",
        ingredient: "All-purpose flour",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmaF1M32DN3r7ciBu7pGxbv_jGrBq-6vlfc8F_JZlyJY8lfcFK59_LaCp0Ac_p52crRxruIi5&usqp=CAc",
      },
      {
        amount: "1 Tbsp + 2 tsp",
        ingredient: "Vegatable oil ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WIIweap2Y7yXbnNS8qTVs5kI_HRDX9WlpzYTy8M12YBFwR20vfVL2zpRwc4&usqp=CAc",
      },
      {
        amount: "1 cup",
        ingredient: "Red wine",
        image: "https://images.heb.com/is/image/HEBGrocery/000538201",
      },
      {
        amount: "2",
        ingredient: "Bay leaves",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/37/Indian_bay_leaf_-_tejpatta_-_indisches_Lorbeerblatt.jpg",
      },
    ],
    instructions: [
      `Combine the flour and pepper in a bowl, add the beef and toss to coat well. `,
      `Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches.`,
      `Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer.`,
    ],
    nutrition: {
      calories: 275,
      protiens: "8g",
      fats: "10g",
      carbs: "26g",
    },
    comments: [
      {
        id: 9667543934333,
        comment: "Nice, I'm sharing this recipe with everyone.",
        user: {
          id: 324832904,
          username: "zipiwhiskuser943",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
        },
        parent_comment_id: null,
        childComments: null,
        numLikes: 4,
        liked: true,
        created_at: "2021-01-19T19:58:38-05:00",
      },
    ],
  },
  {
    id: 193229390423,
    numLikes: 16903,
    numComments: 1,
    title: "Black Bean Veggie Burgers",
    user: {
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      username: "alice",
    },
    recipeImage:
      "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1593983807/Recipes/s0odyvjiko4yuisb8iwm.jpg",
    recipeYield: 4,
    ingredientList: [
      {
        amount: "¼ cup",
        ingredient: "All-purpose flour",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmaF1M32DN3r7ciBu7pGxbv_jGrBq-6vlfc8F_JZlyJY8lfcFK59_LaCp0Ac_p52crRxruIi5&usqp=CAc",
      },
      {
        amount: "1 Tbsp + 2 tsp",
        ingredient: "Vegatable oil ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WIIweap2Y7yXbnNS8qTVs5kI_HRDX9WlpzYTy8M12YBFwR20vfVL2zpRwc4&usqp=CAc",
      },
      {
        amount: "1 cup",
        ingredient: "Red wine",
        image: "https://images.heb.com/is/image/HEBGrocery/000538201",
      },
      {
        amount: "2",
        ingredient: "Bay leaves",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/37/Indian_bay_leaf_-_tejpatta_-_indisches_Lorbeerblatt.jpg",
      },
    ],
    instructions: [
      `Combine the flour and pepper in a bowl, add the beef and toss to coat well. `,
      `Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches.`,
      `Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer.`,
    ],
    nutrition: {
      calories: 275,
      protiens: "8g",
      fats: "10g",
      carbs: "26g",
    },
    comments: [
      {
        id: 966754334333,
        comment: "Nice, I'm sharing this recipe with everyone.",
        user: {
          id: 324832904,
          username: "zipiwhiskuser943",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
        },
        parent_comment_id: null,
        childComments: null,
        numLikes: 4,
        liked: true,
        created_at: "2021-01-19T19:58:38-05:00",
      },
    ],
  },
];

export default data;
