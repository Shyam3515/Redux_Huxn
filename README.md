# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//we are now accessing
our state directly and we are now mutating or changing whichever name you
prefer we are now mutating or changing or state directly and that's not allowed
in reactjs because it's going to work behind the scene but it will not reender your application that's a big no no in
reactjs but in Redux toolkit it uses something called the "immer" library behind
the scenes so we can totally access our state and then we can totally mutate
