import React, {useState, useCallback, useRef} from 'react';

function NoUseImmerjs() {
  const idRef = useRef(1);
  const [form, setForm] = useState({
    userId: '',
    userName: ''
  });
  const [data, setData] = useState({
    list: [],
    useLessData: null,
  });

  const handleForm = useCallback(e => {
    const {name, value} = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  }, []);

  const onInsert = useCallback(e => {
    e.preventDefault();
    
    const user = {
      id: idRef.current++,
      ...form,
    };
    setData(prevData => ({
      ...prevData,
      list: prevData.list.concat(user),
    }))
    setForm({
      userId: '',
      userName: '',
    })

  }, [form])


  return (
    <div>
      <form onSubmit={onInsert}>
        <h2>no use immer.js</h2>
        <p>
          <label>userId:
            <input type="text"
                   name="userId"
                   value={form.userId}
                   onChange={handleForm}
            />
          </label>
        </p>
        <p>
          <label>userName:
            <input type="text"
                   name="userName"
                   value={form.userName}
                   onChange={handleForm}
            />
          </label>
        </p>
        <button type="submit">INSERT</button>
      </form>

      <ul>
        {data.list.map(user => <li key={user.id}>{user.userId} - {user.userName}</li>)}
      </ul>
    </div>
  );
}

export default NoUseImmerjs;
