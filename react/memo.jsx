// 8. 以下代码 调用setCount的时候，child是否会渲染，如何做到让其不渲染。
// javascript

const Child = () => <div>I'm Child</div>

let Parent = (props) => <div>{props.children}</div>
Parent = React.memo(Parent)
// React.memo(() => {
//   return Parent;
// }, [props])

const App = () => {
  const [count, setCount] = useState(0)

  return(
    <div>
      <button onClick={()=>setCount(count+1)}></button>

      <Parent>
        <Child></Child>
      </Parent>
    </div>
  )
}
