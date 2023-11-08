import React from 'react';

const UpdateMap = ({ info }) => {
  return (
    <div>
              <form>
        <div className="space-y-4">
          <input
            type="text"
           defaultValue={info.name}
            name="name"
            className="input input-bordered input-warning w-full max-w-full"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered input-warning w-full max-w-full"
          />
          <input
            type="date"
            name="date"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-full"
            required
          />

          <div className="flex justify-center">
            <input
              type="submit"
              value="Confirm"
              className="text-black font-font1 bg-[#facc15] py-4 px-10 rounded-md hover:bg-sky-600"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateMap;