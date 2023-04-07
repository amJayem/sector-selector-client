import React from 'react'
import useSelectorContext from '../Hooks/useSelectorContext'

const Modal = ({ user }) => {
  console.log(user)

  const { state } = useSelectorContext()
  const selector = state.selector[0]

  const handleUpdate = (e) => {
    // setDisplay(!display);
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const sector = form.sector.value
    console.log(name, sector)
  }
  return (
    <div>
      <div>
        <input type='checkbox' id='EditModal' className='modal-toggle' />
        <label htmlFor='EditModal' className='modal cursor-pointer'>
          <label className='modal-box relative' htmlFor='name'>
            <h3 className='font-bold text-lg'>{user.name}</h3>
            <form onSubmit={handleUpdate}>
              <div className='py-4'>
                <textarea
                  type='text'
                  defaultValue={user.name}
                  // value={user.name}
                  className='input input-bordered input-primary w-full'
                  required
                  name='name'
                />
              </div>
              {/* <select
                name='name'
                id='name'
                className='input input-bordered input-primary w-full'
                required>
                <option value=''>{user.name}</option>
              </select> */}
              <div className='py-4'>
                <label className='mb-2 font-semibold' htmlFor='sector'>
                  Sectors
                </label>
                <select
                  name='sector'
                  id='sector'
                  className='input input-bordered input-primary w-full'
                  required>
                  <option value=''>{user.sector}</option>
                  {selector?.all?.map((items, i) => (
                    <>
                      {items.item ? (
                        <>
                          <optgroup label={items.submenu}>
                            <ItemData item={items.item}></ItemData>
                          </optgroup>
                        </>
                      ) : (
                        <>
                          {items.menu ? (
                            <optgroup label={items.menu}></optgroup>
                          ) : (
                            <option value={items.submenu}>
                              {items.submenu}
                            </option>
                          )}
                        </>
                      )}
                    </>
                  ))}
                  {/* <option value={item?.brand}>{item?.brand}</option> */}
                </select>
              </div>
              <div className='modal-action'>
                <button type='submit' className='btn'>
                  update
                </button>
              </div>
            </form>
          </label>
        </label>
      </div>
    </div>
  )
}

const ItemData = ({ item }) => {
  // console.log(item);
  return (
    <>
      {item.map((item, i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </>
  )
}
export default Modal
