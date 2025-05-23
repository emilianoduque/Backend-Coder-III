# Backend-Coder-III

# 🛍️ API REST - E-commerce

Esta API permite gestionar productos, usuarios y carritos de compras. Además, cuenta con una ruta para generar datos mock (de prueba) facilmente. A continuación se documentan todos los endpoints disponibles.

---

## 🌐 URL Base

```
http://localhost:8080/api
```

---

## 📦 Productos

### 🔍 Obtener todos los productos

**GET** `/products`

```http
GET http://localhost:8080/api/products
```

---

### 🔍 Obtener un producto por ID

**GET** `/products/:pid`

```http
GET http://localhost:8080/api/products/123456
```

---

## 🧪 Datos Mock (productos + usuarios)

### 🔄 Generar datos de prueba

**GET** `/products/np/users/nu`

- `np`: número de productos mock
- `nu`: número de usuarios mock

```http
GET http://localhost:8080/api/products/5/users/10
```

---

## 🛒 Carritos

### ➕ Agregar producto al carrito

**POST** `/carts/`  
Roles permitidos: `USER`, `ADMIN`

```http
POST http://localhost:8080/api/carts/
```

**Body:**
```json
{
  "productId": "abc123",
  "quantity": 2
}
```

---

### 📄 Ver productos del carrito del usuario

**GET** `/carts/`  
Roles permitidos: `USER`

```http
GET http://localhost:8080/api/carts/
```

---

### ✏️ Actualizar cantidad de un producto en el carrito

**PUT** `/carts/:cart_id`  
Roles permitidos: `USER`, `ADMIN`

```http
PUT http://localhost:8080/api/carts/649a9ddaa2
```

**Body:**
```json
{
  "productId": "abc123",
  "quantity": 5
}
```

---

### ❌ Eliminar producto del carrito

**DELETE** `/carts/:cart_id`  
Roles permitidos: `USER`, `ADMIN`

```http
DELETE http://localhost:8080/api/carts/649a9ddaa2
```

---

## 👤 Usuarios

### ➕ Crear un nuevo usuario

**POST** `/users/`  
Rol permitido: `PUBLIC`

```http
POST http://localhost:8080/api/users/
```

**Body:**
```json
{
  "name": "Juan",
  "email": "juan@example.com",
  "password": "123456"
}
```

---

### 📄 Ver todos los usuarios

**GET** `/users/`  
Rol permitido: `ADMIN`

```http
GET http://localhost:8080/api/users/
```

---

### 🔍 Ver usuario por ID

**GET** `/users/:id`  
Roles permitidos: `USER`, `ADMIN`

```http
GET http://localhost:8080/api/users/64ba1e2fbc
```

---

### ✏️ Actualizar usuario

**PUT** `/users/:id`  
Roles permitidos: `USER`, `ADMIN`

```http
PUT http://localhost:8080/api/users/64ba1e2fbc
```

**Body:**
```json
{
  "name": "Juan actualizado"
}
```

---

### ❌ Eliminar usuario

**DELETE** `/users/:id`  
Roles permitidos: `USER`, `ADMIN`

```http
DELETE http://localhost:8080/api/users/64ba1e2fbc
```

---

## 🔐 Roles de acceso

- `PUBLIC`: Acceso libre, sin autenticación
- `USER`: Usuario autenticado
- `ADMIN`: Usuario con privilegios administrativos

---

## 🚀 Inicio rápido

1. Cloná el repositorio:
   ```bash
   git clone <url-del-repo>
   cd <nombre-del-repo>
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Iniciá el servidor:
   ```bash
   npm run dev
   ```

4. Accedé a los endpoints desde:
   ```
   http://localhost:8080/api
   ```

---

## 🛠️ Requisitos

- Node.js
- MongoDB (local o Atlas)
- Postman para probar endpoints

---