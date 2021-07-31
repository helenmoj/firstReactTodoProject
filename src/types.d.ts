// whats nice about a *.d.ts file is our compiler will recognise the types in there as global
// to the project and we won't need to explicity import or export them

interface Todo {
    text: string;
    complete: boolean;
  }
  
  type ToggleTodo = (selectedTodo: Todo) => void;
  
  type AddTodo = (text: string) => void;

// now we can remove the Todo interface declared in TodoListItem.tsx and everything
// should still work just fine. 