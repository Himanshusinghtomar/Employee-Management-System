# Employee Management System 🚀

This is a **full-stack CRUD application** for managing employees, built with:

- **Backend**: Spring Boot + H2 Database
- **Frontend**: Angular 16 + Bootstrap

---

## 🔥 Features
- View Employee List
- Add New Employees
- Delete Employees
- Responsive UI

---

## 🛠 Tech Stack
### **Backend:**
- Java 17
- Spring Boot
- Spring Data JPA
- H2 Database (In-Memory)
- Gradle

### **Frontend:**
- Angular 16
- Bootstrap 5
- TypeScript

---

## ⚙️ How to Run the Project

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/himanshusinghtomar/Employee-Management-System.git
cd Employee-Management-System
```

---

### **2️⃣ Backend Setup (Spring Boot + H2 DB)**
#### **📌 Steps to Run the Backend**
1. Navigate to the **backend** folder:
   ```sh
   cd backend
   ```
2. Run the backend server using Gradle:
   ```sh
   ./gradlew bootRun
   ```
   *(For Windows users, use `gradlew.bat bootRun`)*

3. Backend will start on **`http://localhost:8080`**.

#### **📌 H2 Database Configuration**
- **Access H2 Console**: Open `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: *(Leave empty)*

---

### **3️⃣ Frontend Setup (Angular)**
#### **📌 Steps to Run the Frontend**
1. Navigate to the **frontend** folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular frontend:
   ```sh
   ng serve --open
   ```
4. Frontend will open at **`http://localhost:4200`**.

---

## 📌 API Endpoints

| HTTP Method | Endpoint | Description |
|------------|---------|-------------|
| GET | `/employees` | Get all employees |
| POST | `/employees` | Add an employee |
| DELETE | `/employees/{id}` | Delete an employee |

---

## 📸 Screenshots

| Employee List | Add Employee |
|--------------|-------------|
| ![Employee List](https://via.placeholder.com/500x300) | ![Add Employee](https://via.placeholder.com/500x300) |

---

## 🚀 Deployment Steps
### **📌 Docker Deployment**
#### **1. Create `Dockerfile` for Backend**
```dockerfile
# Use OpenJDK 17 as base image
FROM openjdk:17
WORKDIR /app
COPY build/libs/backend-0.0.1-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "app.jar"]
EXPOSE 8080
```

#### **2. Create `Dockerfile` for Frontend**
```dockerfile
# Use Node.js as base image
FROM node:18
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod
CMD ["npx", "http-server", "dist/frontend", "-p", "4200"]
EXPOSE 4200
```

#### **3. Run Docker Containers**
```sh
docker build -t employee-backend ./backend
docker build -t employee-frontend ./frontend
docker run -p 8080:8080 employee-backend
docker run -p 4200:4200 employee-frontend
```

---

## 💡 Next Steps
- [ ] Edit Employee Feature ✏️
- [ ] Deploy on Docker 🐳
- [ ] Add PostgreSQL Database 🗃️

---

## 📝 Author
Developed by **[Himanshu Singh Tomar](https://github.com/Himanshusinghtomar)**

⭐ If you like this project, please **star** this repository! 🚀

