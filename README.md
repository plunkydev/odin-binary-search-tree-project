# Binary Search Trees (BST) – Proyecto en JavaScript

Implementación de un **Árbol Binario de Búsqueda balanceado** (BST) en JavaScript, con inserción, borrado, búsqueda, recorridos (BFS/DFS), métricas (altura/profundidad) y verificación/re‐balanceo del árbol. Basado en la lección oficial de The Odin Project. :contentReference[oaicite:0]{index=0}

---

## 🎯 Propósito

- Construir desde cero un **BST balanceado** que permita **búsqueda, inserción y eliminación eficientes**.
- Practicar **recorridos** por niveles (BFS) y en profundidad (in/pre/post‐order).
- Calcular **altura** y **profundidad** de nodos; **detectar desbalance** y **re‐balancear** el árbol.
- Consolidar **POO en JS**, **recursividad** y razonamiento de **Big-O** en operaciones sobre árboles. :contentReference[oaicite:1]{index=1}

> Nota: evitar **valores duplicados** (eliminar o ignorar) para simplificar y preservar el balance. :contentReference[oaicite:2]{index=2}

---

## 🧭 Alcance del proyecto (qué construiré)

1. **`Node`**: estructura con `data`, `left`, `right`.  
2. **`Tree`**: clase/factory que recibe un arreglo al inicializar y expone `root` (resultado de `buildTree`).  
3. **`buildTree(array)`**: crea un **BST balanceado** a partir de un arreglo **ordenado y sin duplicados**; devuelve la **raíz nivel 0**.  
4. **Operaciones**:
   - `insert(value)` y `deleteItem(value)` (maneja casos: hoja, 1 hijo, 2 hijos).  
   - `find(value)` → retorna el **nodo** con el valor.  
5. **Recorrido por niveles (BFS)**:
   - `levelOrderForEach(callback)` → recorre **en nivel** y aplica `callback(node)`; **lanza Error** si no se pasa callback.  
6. **Recorridos en profundidad (DFS)**:
   - `inOrderForEach(cb)`, `preOrderForEach(cb)`, `postOrderForEach(cb)` → requieren `cb` y **lanzan Error** si falta.  
7. **Métricas**:
   - `height(value)` y `depth(value)` (retornan `null` si el valor no existe).  
8. **Balanceo**:
   - `isBalanced()` → **verifica la condición en *cada* nodo** (no solo en la raíz).  
   - `rebalance()` → reconstruye el árbol a partir de un recorrido que produzca los valores ordenados.  
9. **Utilidad**:
   - `prettyPrint(root)` para visualizar el árbol en consola (snippet abajo).  
   
_(Todos estos ítems provienen de la sección “Assignment” de la lección.)_ :contentReference[oaicite:3]{index=3}

---

## ✅ Criterios de aceptación (driver script)

1. Crear un BST desde un arreglo de **números aleatorios < 100**.  
2. Confirmar que el árbol **está balanceado** con `isBalanced`.  
3. Imprimir **level**, **pre**, **post** e **inOrder**.  
4. **Desbalancear** insertando varios números **> 100**.  
5. Confirmar que **no** está balanceado con `isBalanced`.  
6. Ejecutar `rebalance()`.  
7. Confirmar que **volvió a estar balanceado** con `isBalanced`.  
8. Volver a imprimir **level**, **pre**, **post** e **inOrder**. :contentReference[oaicite:4]{index=4}

---

## 📚 Resultados de aprendizaje esperados

- **Comprender** la propiedad BST y su impacto en el rendimiento.  
- **Aplicar** BFS con **cola** y DFS recursivo (in/pre/post).  
- **Implementar** borrado manejando correctamente los **tres casos** (incluido el **sucesor** del subárbol derecho).  
- **Medir** altura/profundidad y **comprobar** el balance **en todo el árbol** (evitar el *pitfall* de chequear solo la raíz).  
- **Reconstruir** un BST balanceado a partir de sus valores actuales (inOrder). :contentReference[oaicite:5]{index=5}

---

## 🧪 Notas de implementación

- **No uses el arreglo original** para simular operaciones; recorre y manipula **nodos/enlaces** del árbol para lograr la eficiencia objetivo.  
  En árboles balanceados, inserción/borrado típicamente son `O(log n)` (vs. arrays). :contentReference[oaicite:6]{index=6}
- **Errores**: `levelOrderForEach` y los recorridos DFS deben **lanzar Error** si no reciben callback. :contentReference[oaicite:7]{index=7}
- **Visualización**: usa `prettyPrint(root)` (snippet oficial de la lección). :contentReference[oaicite:8]{index=8}
