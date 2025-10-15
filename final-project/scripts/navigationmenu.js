export const navigation = document.querySelector("#nav-bar");

export const btn = document.querySelector("#ham-btn");

export function AddHideNavigation() {
    btn.addEventListener("click", () => {
        if (navigation.classList.contains("open")) {
            // Cambiar a animación de salida
            navigation.classList.remove("open");
            navigation.classList.add("close");
            
            // Remover clase close después de la animación
            setTimeout(() => {
                navigation.classList.remove("close");
            }, 300);
        } else {
            // Remover close si existe y animar entrada
            navigation.classList.remove("close");
            navigation.classList.add("open");
        }
    });
}