const comment = "TypeScript is a strongly typed programming language"
let text_array = comment.split(" ");
export function shortenComment(comment?: string){
  const filter_array: string[] = text_array.filter((text_array) => text_array.length >= 5 && text_array.length <= 10 )
  return filter_array.toString().replace(/,/g," ") ?? "";
}
shortenComment(comment)