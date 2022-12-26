import React from "react";

function UserInfoModeOne({ user, setUser, setOk }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      setOk(true);
    }
  };

  return (
    <>
      <div>
        <div className="row text-center">
          <div>
            <h4>Oyuncu isimini giriniz !!!</h4>
          </div>
          <form>
            <div className="row">
              <div className="col-sm-12 mt-3 ">
                <label htmlFor="user1Input" className="form-label">
                  Oyuncu  İsmi :
                </label>
                <input
                  type="text"
                  className="form-control"
                  // value={user}
                  onChange={(event) => setUser(event.target.value)}
                />
              </div>
              <div className="mt-5">
                <button
                  onClick={handleSubmit}
                  className="btn btn-outline-success"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserInfoModeOne;
