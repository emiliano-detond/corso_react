function Card({ title, imgUrl, children, isVisited }) {
  return (
    <div className="rounded-md bg-zinc-950">
      <img src={imgUrl} alt=""></img>
      <div className="flex flex-col p-4">
        <h2 className="text-2xl text-white font-bold">{title}</h2>
        <p className="text-gray-500">{children}</p>
        {isVisited && <span>✔️ visitata</span>}
        {!isVisited && <span>✖️ non visitata</span>}
      </div>
    </div>
  );
}

export default Card;
