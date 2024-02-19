import UserProfile from './components/UserProfile'
import './App.css'

const userDetails = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Jhon Moxley',
    role: 'Software Engineer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Samantha',
    role: 'MERN Stack Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Catherin',
    role: 'Could Engineer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Dwayne Jhonson',
    role: 'AI Scientist',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {userDetails.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
