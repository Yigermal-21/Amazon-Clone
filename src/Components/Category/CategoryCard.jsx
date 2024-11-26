import Classes from "./Category.module.css";

function CategoryCard({ data }) {
  console.log(data);
  return (
    <div className={Classes.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt={data.title} />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
