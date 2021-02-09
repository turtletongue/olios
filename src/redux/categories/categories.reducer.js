import { FETCH_CATEGORIES } from './categories.constants';

const initialState = {
  currentCategories: {
    livingRoom: {
      id: 1,
      name: 'Living Room',
      pathName: 'living-room',
      imageUrl: 'https://i.ibb.co/LhRG66B/living.png',
      products: [
        {
          id: "1",
          price: "45",
          size: "sm",
          cols: "1",
          title: "Red Seat",
          imageUrl: "https://i.ibb.co/sV1GNFK/red-seat.png",
          likes: 0
        },
        {
          id: "2",
          price: "350",
          size: "lg",
          cols: "3",
          title: "White Table",
          imageUrl: "https://i.ibb.co/VLTptzz/white-table.png",
          likes: 0
        },
        {
          id: "3",
          price: "35",
          size: "sm",
          cols: "1",
          title: "Blue Seat",
          imageUrl: "https://i.ibb.co/FzvQVdG/blue-seat.png",
          likes: 0
        },
        {
          id: "4",
          price: "120",
          size: "md",
          cols: "2",
          title: "Modern Bed",
          imageUrl: "https://i.ibb.co/2y5dbd3/modern-bed.png",
          likes: 0
        },
        {
          id: "5",
          price: "50",
          size: "sm",
          cols: "1",
          title: "Dark Seat",
          imageUrl: "https://i.ibb.co/Hg5922r/dark-seat.png",
          likes: 0
        }
      ]
    },
    office: {
      id: 2,
      name: 'Office',
      pathName: 'office',
      imageUrl: 'https://i.ibb.co/MgtbjJ0/3535.png',
      products: []
    },
    forKids: {
      id: 3,
      name: 'For Kids',
      pathName: 'for-kids',
      imageUrl: 'https://i.ibb.co/tqGw0dz/545.png',
      products: []
    },
    kitchen: {
      id: 4,
      name: 'Kitchen',
      pathName: 'kitchen',
      imageUrl: 'https://i.ibb.co/CVkvY4q/345.png',
      products: []
    },
    accessories: {
      id: 5,
      name: 'Accessories',
      pathName: 'accessories',
      imageUrl: 'https://i.ibb.co/q02f2p9/123.png',
      products: []
    }
  }
}

const categoriesReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return { ...state, currentCategories: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;