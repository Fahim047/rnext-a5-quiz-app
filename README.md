# 🧩 **Quizzes - A Quiz Application**

Welcome to the **Quizzes - A Quiz Application**! This project is a dynamic web application that enables administrators to create and manage quizzes while allowing users to participate in quizzes, view leaderboards, and track their progress.

---

## 🌟 **Features**

### **1. Quiz Management**

- Create, edit, and delete quiz sets.
- Add multiple-choice questions
- Manage quiz visibility(publish or draft).

### **2. Quiz Taking**

- **Question Randomization**: Dynamic question order for each quiz attempt.
- **Option Randomization**: Dynamic option order for each quiz attempt.

### **3. User Roles**

- **Admin**: Manage quizzes and can act as a user too.
- **User**: Participate in quizzes, submit answers, and view results and leaderboard.

### **4. Leaderboard**

- Track scores of participants for each quiz set.
- CurrentUser is highlighted if appears in the list.

### **5. Secure Authentication**

- User registration and login with secure password storage.
- Token-based authentication with access token and refresh token mechanisms.

### **6. Adaptive UI**

- Fully responsive design, optimized for both desktop and mobile.
- Elegant and interactive UI with smooth animations.

### **7. Error Handling**

- Comprehensive error handling for server and client errors.
- User-friendly feedback for invalid inputs and server-side issues.

---

## 🛠️ **Technologies Used**

### **Frontend**

- **React.js**: For building the interactive user interface.
- **Tailwind CSS**: For responsive and modern design.
- **React Router**: For seamless navigation across pages.
- **React Hook Form**: For form validation and management.
- **Axios**: For handling HTTP requests.

### **Backend**

- **Node.js** with **Express.js**: For API development and server-side logic.
- **MongoDB**: For storing quiz sets, questions, and user data.
- **JWT**: For secure authentication with access and refresh tokens.

### **Utilities**

- **SweetAlert2**: For clean and interactive alerts and toasts.

---

## 💡 **Challenges Faced**

### **1. Token Expiry Handling**

- Managing token expiration and automatic token refresh while ensuring a smooth user experience was challenging.
- **Solution**: Implemented Axios interceptors for token renewal and automatic logout upon refresh token expiry.

### **2. Dynamic Data Updates**

- Keeping the UI in sync with backend changes (e.g., after deleting a quiz) required careful state management.
- **Solution**: Leveraged React's `useState` and `useEffect` hooks to dynamically update the UI.

---

## 📸 **Screenshots**

### **Homepage**

![Homepage for user](https://i.ibb.co.com/hgJcpVt/Screenshot-2024-11-26-215817.png)

### Sign In

![Sign In Page](https://i.ibb.co.com/Trc8tYM/Screenshot-2024-11-26-221346.png)

### Sign Up

![Sign Up Page](https://i.ibb.co.com/80hDG4r/Screenshot-2024-11-26-221358.png)

### **Quiz Taking Page**

![Quiz Taking Page](https://i.ibb.co.com/s6TQpxx/Screenshot-2024-11-26-215844.png)

### **Result Page**

![Result Page](https://i.ibb.co.com/vLj8yxx/Screenshot-2024-11-26-215922.png)
https://i.ibb.co.com/7zNMYyR/Screenshot-2024-11-26-220011.png

### **Leaderboard**

![Leaderboard](https://i.ibb.co.com/7zNMYyR/Screenshot-2024-11-26-220011.png)

## **Admin**

### **Homepage(Admin)**

![Admin Dashboard](https://i.ibb.co.com/VSDNLmL/Screenshot-2024-11-26-221051.png)

### **Create New QuizSet**

![Create New QuizSet](https://i.ibb.co.com/ZNbyn9F/Screenshot-2024-11-26-221131.png)

### **Manage Question(CRUD)**

![Manage Questions](https://i.ibb.co.com/BBZZ9CL/Screenshot-2024-11-26-221214.png)

### **Edit Question**

![Edit Question](https://i.ibb.co.com/GFwKDP4/Screenshot-2024-11-26-221243.png)

---

## 📚 **Future Enhancements**

- **Analytics Dashboard**: Comprehensive insights into quiz performance.
- **Multi-Language Support**: Accessibility for users worldwide.
- **Timer Integration**: Add timed quizzes for more engagement.

---

## 🤝 **Acknowledgments**

A special thanks to:

- **Learn With Sumit Community**: For the learning resources and great support.

---

Feel free to contact me for questions or feedback. I hope you enjoy exploring the **Quizzes - A Quiz Application**! 🎉
