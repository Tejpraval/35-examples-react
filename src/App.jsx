
import React , { useState } from 'react'
import './App.css'
import UserCard from './examples/01-UserCard.jsx'
import ProductCard from './examples/02-ProductCard.jsx'
import Card from './examples/03-ChildrenWrapper.jsx'
import Button from './examples/04-ButtonVariants.jsx'
import ClassCounter from './examples/06-ClassCounter.jsx'
import Example07 from './examples/07-ClassLifecycleFetch.jsx'
import Example08 from './examples/08-ClassToggleTheme.jsx'
import Example09 from './examples/09-CounterHook.jsx'
import Example10 from './examples/10-FormInputControl.jsx'
import Example11 from './examples/11-TodoApp.jsx'
import Example12 from './examples/12-ShowHidePassword.jsx'
import Example13 from './examples/13-DynamicProductList.jsx'
import Example14 from './examples/14-Accordion.jsx'
import Example15 from './examples/15-LikeSystem.jsx'
import Example16 from './examples/16-ColorPicker.jsx'
import Example17 from './examples/17-Modal.jsx'
import Example18 from './examples/18-EmailValidation.jsx'
import Example19 from './examples/19-ApiUsersFetch.jsx'
import Example20 from './examples/20-SearchUsers.jsx'
import Example21  from './examples/21-WindowResizeTracker.jsx'
import Example22 from './examples/22-DigitalClock.jsx'
import Example23 from './examples/23-LocalStorageCounter.jsx'
import Example24 from './examples/24-DocumentTitleUpdater.jsx'
import Example25 from './examples/25-DependencyEffectDemo.jsx'
import Example26 from './examples/26-DebouncedSearch.jsx'
import Example27 from './examples/27-FocusInput.jsx'
import Example28  from './examples/28-PreviousValueTracker.jsx'
import Example29 from './examples/29-Stopwatch.jsx'
import Example30 from './examples/30-ScrollToBottom.jsx'
import Example31 from './examples/31-BasicRouting.jsx'
import Example32 from './examples/32-ProductDetailsParams.jsx'
import Example33 from './examples/33-QuerySearch.jsx' 
import Example34  from './examples/34-ProtectedRoute.jsx'
import Example35 from './examples/35-NestedRoutes.jsx'
import Example36 from './examples/36-LayoutWithOutlet.jsx'
import Example37 from './examples/37-NotFoundRoute.jsx'
import Example38 from './examples/38-ThemeContextApp.jsx'
import Example39 from './examples/39-UserAuthContext.jsx'
import  useFetch from './examples/40-useFetch.js'
import useLocalStorage from "./examples/41-useLocalStorage";
import useDebounce from "./examples/42-useDebounce";
import Example43 from './examples/43-UseMemoProductsFilter.jsx'
import Example44 from './examples/44-UseCallbackDemo.jsx'
import Example45 from './examples/45-MiniEcommerceApp.jsx'
function App() {
  const [text, setText] = useState("");
  const debounced = useDebounce(text, 500);

  const [count, setCount] = useLocalStorage("myCount", 0);
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      <div>
      <h2>Example 01 - User Card</h2>
      <UserCard name="John Doe" email="john@example.com" />
      <UserCard name="Jane Smith" email="jane@example.com" />
    </div>
     <div>
        <h2>Example 02 - Product Card</h2>
      <ProductCard title="Laptop" price={55000} inStock={true} />
      <ProductCard title="Mobile" price={25000} inStock={false} />
     </div>
     <div>
      <h2>Example 03 - Children Wrapper</h2>
      <Card>
        <h3>This is inside card</h3>
        <p>Reusable layout container</p>
      </Card>
    </div>
    <div>
       <h2>Example 04 - Button Variants</h2>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="success">Save</Button>
    </div>
    <div>
      <ClassCounter />
    </div>
    <div>
      <Example07 />
    </div>
    <div>
      <Example08 />
    </div>
    <div>
      <Example09 />
    </div>
    <div>
      <Example10 />
    </div>
    <div>
      <Example11 />
    </div>
    <div>
      <Example12 />
    </div>
    <div>
      <Example13 />
    </div>
    <div>
      <Example14 />
    </div>
    <div>
      <Example15 />
    </div>
    <div>
      <Example16 />
    </div>
    <div> 
      <Example17 />
    </div>
    <div>
      <Example18 />
    </div>
    <div>
      <Example19 />
    </div>
    <div>
      <Example20 />
    </div>
    <div>
      <Example21 />
    </div>
    <div>
      <Example22 />
    </div>
    <div>
      <Example23 />
    </div>
    <div>
      <Example24 />
    </div>
    <div>
      <Example25 />
    </div>
    <div>   
      <Example26 />
    </div>
    <div>
      <Example27 />
    </div>
    <div>
      <Example28 />
    </div>
    <div>
      <Example29 />
    </div>
    <div> 
      <Example30 />
    </div>
    <div>
      <Example31 />
    </div>
    <div>
      <Example32 />
    </div>
    <div>
      <Example33 />
    </div>
    <div>
      <Example34 />
    </div>
    <div>
      <Example35 />
    </div>
    <div>
      <Example36 />
    </div>
    <div>
      <Example37 />
    </div>
    <div>
      <Example38 />
    </div>
    <div>
      <Example39 />
    </div>
    <div>
      <useFetch />
    </div>
        <div>
      <h2>Example 40 - Custom useFetch</h2>
      {loading ? "Loading..." :
        data.slice(0,5).map(post =>
          <p key={post.id}>{post.title}</p>
        )
      }
    </div>
    <div>
      <h2>Example 41 - useLocalStorage Hook</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
     <div>
      <h2>Example 42 - useDebounce Hook</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Debounced: {debounced}</p>
    </div>
      <div>
      <Example43 />
    </div>
    <div>
      <Example44 />
    </div>
    <div>
      <Example45 />
    </div>
    </>
  )
}

export default App
