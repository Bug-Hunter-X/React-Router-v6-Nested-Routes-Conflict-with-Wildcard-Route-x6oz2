# React Router v6 Nested Route Conflict with Wildcard Route

This repository demonstrates a bug in React Router v6 where a wildcard route ('/users/*') conflicts with more specific nested routes under the same base path ('/users').  The wildcard route incorrectly overrides more specific routes.

## Bug Description
The provided code uses nested routes and a wildcard route. When navigating to a specific nested route such as '/users/profile', the wildcard route matches instead of the nested route, resulting in the wrong component rendering.

## Solution
The solution involves restructuring the routes to ensure that the more specific nested routes are matched before the wildcard route.  This can be done by either adjusting the route order or using route parameters more effectively.

## How to reproduce the bug
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to '/users/profile'.  Observe that 'Users' component is rendered instead of a potential 'Profile' component (which would be implemented in a more complete example).
