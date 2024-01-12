import React from "react";
import { useMutation } from "react-query";

const AddTrans = ({ show, onClose, onSave }) => {
  const [username, setTrans] = useState("");
  const [amount, setAmount] = useState([]);
  const { mutate: addTrans } = useMutation({
    mutationFn: () =>
      createTrans({
        username,
        amounts: amount,
      }),
    onSuccess: () => {
      onClose();
    },
  });
  const handelTrans = (e) => {
    setTrans(r.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTrans();
  };
  if (!show) {
    return null;
  }
  return (
    <div>
      <div>
        <h2>Add Transction</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-white text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handelTrans}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="topics"
              className="block text-white text-sm font-medium mb-2"
            >
              Topics
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrans;
