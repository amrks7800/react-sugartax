# React-sugartax

React package for simpler syntax in looping and conditional rendering via dedicated components For.tsx & Show.tsx...etc 😊

# Installation

```bash
  npm i @dev-amr/react-sugartax
```

# Usage

- For Component

```typescript
import { For } from "@dev-amr/react-sugartax"
import { useState } from "react"

const Component = () => {
  const [iter, setIter] = useState([1, 2, 3])

  return (
    <>
      <For each={iter}>
        {(item, i) => <div key={i}>{item}</div>}
      </For>
    </>
  )
}
```

- Show Component

```typescript
import { Show } from "@dev-amr/react-sugartax"
import { useState } from "react"

const Component = () => {
  const [iter, setIter] = useState([1, 2, 3])

  return (
    <>
      <Show
        when={iter}
        fallback={<h1>No elements...😁</h1>}
      >
        {JSON.stringify(iter)}
      </Show>
    </>
  )
}
```

- Switch cases Component

```typescript
import { Switch, Case } from "@dev-amr/react-sugartax"
import { useState } from "react"

const Component = () => {
  const [iter, setIter] = useState([1, 2, 3])

  return (
    <Switch on={iter.length}>
      <Case that={3}>
        <h1>length is 3</h1>
      </Case>
      <Case that={2}>
        <h1>length is 2</h1>
      </Case>
      <Case that={1}>
        <h1>length is 1</h1>
      </Case>
    </Switch>
  )
}
```

# More Examples

- combination of <kbd>Show</kbd> + <kbd>For</kbd>

```typescript
import { Show, For } from "@dev-amr/react-sugartax"

const Component = () => {
  const [arr, setArr] = useState<string[]>([])

  return (
    <Show
      when={!!arr.length}
      fallback={<h3>there is no devs out there 😂</h3>}
    >
      <For each={arr}>
        {(item, i) => <h1 key={i}>hello devs {item} 😀</h1>}
      </For>
    </Show>
  )
}
```

- combination of <kbd>For</kbd> with our <kbd>usePagination</kbd> hook 😊.

```typescript
import { For, usePagination } from "@dev-amr/react-sugartax"
import { useState } from "react"

let array: number[] = []
for (let i = 0; i <= 53; i++) {
  array.push(i)
}

function App() {
  const [arr] = useState(array)
  const { nextPage, previousPage, page, currentPage } =
    usePagination({ Input: arr, perPage: 10 })
  return (
    <>
      <For each={page}>
        {(item, i) => (
          <p>
            <span>{item}</span>
            <span>{i}</span>
          </p>
        )}
      </For>
      <p>current page: {currentPage}</p>
      <div>
        <button onClick={previousPage}>
          previous page
        </button>
        <button onClick={nextPage}>next page</button>
      </div>
    </>
  )
}
```
