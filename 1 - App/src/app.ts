// const a: string = "hello word";
// const n: number = 3;
// const b: boolean = true;
// const d: null = null;

// //tableau
// const arr: string[] = ["aze", "aze"];

// //lastname? veut dire que c'est optionnel, "[key: string]: string" veut dire qu'il peut y avoir une infinité de clés string avec valeur string
// const user: { firstname: string; lastname: string; [key: string]: string } = {
//   firstname: "jhon",
//   lastname: "Doe",
// };

// const date: Date = new Date();

// const cb: (e: MouseEvent) => void = (e: MouseEvent): void => {};

// function printId(id: number | string) {
//   console.log(id.toString());
// }

const compteur = document.querySelector("#compteur");

let i = 0;

const increment = (e: Event) => {
  e.preventDefault;
  i++;

  const span = compteur?.querySelector("span");
  if (span) {
    span.innerHTML = i.toString();
  }
};

compteur?.addEventListener("click", increment);
