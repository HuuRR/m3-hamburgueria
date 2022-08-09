function Header({ setValue, value, showProducts }) {
  return (
    <div className="container--header">
      <div className="container--logo">
        <p className="logo--burguer">Burghurr</p>
        <p className="logo--kenzie">Kenzie</p>
      </div>
      <div className="container--input">
        <input
          className="input--pesquisa"
          type="text"
          placeholder="o que você deseja?"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        ></input>
        <button
          className="button--pesquisa"
          onClick={() => showProducts(value)}
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}
export default Header;
