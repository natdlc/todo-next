const AppNavComp = () => {
  return ( 
    <>
      <div className="container flex justify-between p-2">
        <h3 className="">Todo</h3>
        <nav>
          <ul className="flex gap-2">
            <li>Log In</li>
            <li>Log Out</li>
          </ul>
        </nav>
      </div>
    </>
   );
}
 
export default AppNavComp;