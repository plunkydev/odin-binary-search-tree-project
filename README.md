# HashMap en JavaScript

Este proyecto forma parte del curso **Fullstack JavaScript** de [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap).  
El objetivo es implementar desde cero una **estructura de datos HashMap**, entendiendo cómo funciona internamente y practicando conceptos clave de algoritmos y estructuras de datos.  
Además, se planea desarrollar una **representación gráfica** que permita visualizar la distribución de claves en buckets, así como interactuar con los métodos principales de la estructura.

---

## 🚀 Motivación

En JavaScript ya existen objetos (`{}`) y `Map` para almacenar pares clave-valor.  
Sin embargo, construir un **HashMap propio** permite:

- Comprender cómo se distribuyen las claves en un arreglo de **buckets**.
- Implementar y analizar una **función hash**.
- Manejar **colisiones** mediante listas enlazadas.
- Profundizar en el concepto de **factor de carga** y **redimensionado dinámico**.
- Practicar el diseño y la implementación de métodos de una estructura de datos clásica.
- **Visualizar de manera gráfica** cómo se insertan, eliminan y buscan los datos en el HashMap.

---

## 🛠️ Funcionalidades Implementadas

El HashMap debe soportar:

- `set(key, value)`: Inserta un par clave-valor (o actualiza si la clave ya existe).  
- `get(key)`: Devuelve el valor asociado a la clave o `null` si no existe.  
- `has(key)`: Comprueba si la clave está presente.  
- `remove(key)`: Elimina un par clave-valor si existe.  
- `length()`: Devuelve el número de pares almacenados.  
- `clear()`: Vacía la estructura.  
- `keys()`: Devuelve un arreglo con todas las claves.  
- `values()`: Devuelve un arreglo con todos los valores.  
- `entries()`: Devuelve un arreglo de pares `[key, value]`.

Además:

- Manejo de **colisiones** con listas enlazadas.  
- **Redimensionado automático** cuando se supera el factor de carga (`loadFactor`).  
- **Representación gráfica interactiva** para probar las operaciones de inserción, búsqueda y eliminación.

---

## 📚 Aprendizajes Clave

- Cómo diseñar una **función hash simple**.  
- Diferencia entre complejidad **promedio** y **peor caso** en un HashMap.  
- La importancia de los **invariantes internos**: no duplicar claves, mantener `count` correcto, validar índices.  
- Cómo reinsertar elementos correctamente al **duplicar la capacidad**.  
- Qué aporta una **visualización gráfica** para reforzar la comprensión de estructuras de datos.

---

## 🧪 Pruebas sugeridas

1. Insertar varias claves hasta acercarse al factor de carga y verificar el **resize**.  
2. Sobrescribir valores en una clave existente y comprobar que la longitud no cambia.  
3. Usar `remove`, probando eliminar claves en diferentes posiciones del bucket.  
4. Verificar que `keys`, `values` y `entries` devuelven la información completa.  
5. **Comprobar en la interfaz gráfica** que los buckets y listas enlazadas reflejan los cambios tras cada operación.

---

## 📌 Estado

Este proyecto está en construcción como parte de mi aprendizaje con The Odin Project.  
El propósito no es crear una librería de producción, sino **comprender a fondo la lógica de los HashMaps** y reforzar el aprendizaje con una **visualización interactiva**.
