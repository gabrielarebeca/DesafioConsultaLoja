function valorItem() {
let item = prompt ("Informe o id do item");
let itemSelecionado = document.getElementById ("itemSelecionado");
switch (item) {
    case "1":
        itemSelecionado.textContent = "O valor do Notebook é 2.000$";
        break
    case "2":
        itemSelecionado.textContent = "O valor da Camera é 500$";
        break
    case "3":
        itemSelecionado.textContent = "O valor do Mouse é 60$";
        break
    case "4":
        itemSelecionado.textContent = "O valor do Teclado é 100$";
        break
    default:
        itemSelecionado.textContent = "Insira um item válido";
        break
    }
}