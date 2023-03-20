## PROJECT STRUCTURE 🏗

| File or folder | Description                                                                                                                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src/index.tsx  | The entry file. This is where we import babel polyfills and render the App into the root DOM node.                                                                                           |
| src/App        | Main application routes, components that need to be mounted at all times regardless of current route, global css styles, etc. Basically anything considered global /ancestor of all modules. |
| src/auth       | Authentication module                                                                                                                                                                        |
| src/pages      | Project module                                                                                                                                                                               |

## Libraries
- Call API: axios
- Form Management: react-hook-form
- Router: react-router-dom
- State Management: @reduxjs/toolkit
- UI: SCSS

## In the project directory, you can run:
- `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


