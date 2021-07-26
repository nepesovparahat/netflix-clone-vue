# Netflix-Clone
In project, I tried to simulate the Netflix interface using Vue.js to practice pulling data from TMDb API with Axios. I used the Swiper library for SCSS and Slider in the design. How to write code better, how to manage folder structure etc. Any tips on it would be really appreciated.
> ### Project Link: [Netfix-clone](https://netflix-clone-vue.netlify.app/)
---
## Screenshots
![netf](https://user-images.githubusercontent.com/67821216/126894595-d2b81f28-e884-4470-916e-39214b4bde41.jpeg)
![netflix](https://user-images.githubusercontent.com/67821216/126894599-442b3882-24f3-4a5f-96f4-1495856c923c.jpeg)
##
---
## Technologies
**Builded with :**
- Vue.js - Vue 3
- Vite
- Axios
- SCSS
- Swiper
- Responsive Web Design
- TMDb API
---
## Environment Variables
How to run the application locally:

Go to TMDb and sign up to get a free API key.
Next, you will need to set your environment variables and secret keys like API KEYS, which will be ignored by git. To do this, go to the project root directory and create an .env file.
Add VITE_KEY = YOUR_API_KEY line to the file. This will allow you to access API_KEY as a global variable from anywhere on the client. The .env file is already set to .gitignor and will be ignored by git.
## Setup Project:

```sh
$ cd netfix-clone
$ yarn install
$ yarn dev
```