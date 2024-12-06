```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersContainer />}>
          <Route path="profile" element={<UserProfile />} />
          {/* other nested routes under /users */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function UsersContainer() {
  return (
    <div>
      <h1>Users</h1>
      <Outlet/>
    </div>
  );
}

function UserProfile(){
  return <h1>User Profile</h1>;
}

export default App;
```