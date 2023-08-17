# React-sugartax

React package for simpler syntax in looping and conditional rendering via dedicated components For.tsx & Show.tsx 😊

# Installation

```bash
  npm i @dev-amr/react-sugartax
```

# Usage

- For Component

````typescript
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

- Show Component

```typescript
import { Show } from "@dev-amr/react-sugartax"
import { useState } from "react"

const Component = () => {
  const [iter, setIter] = useState([1, 2, 3])

  return (
    <>
      <Show when={iter} fallback={<h1>No elements...😁</h1>}>
        {JSON.stringify(iter)}
      </Show>
    </>
  )
}
````
