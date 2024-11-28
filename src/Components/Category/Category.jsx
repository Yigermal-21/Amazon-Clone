import CategoryCard from "./CategoryCard";
import { CategoryInfo } from "./CategoryInfo";
import Classes from "./Category.module.css";

function Category() {
  return (
    <div>
      <section className={Classes.category_container}>
        {CategoryInfo.map((Infos) => {
          return <CategoryCard key={Infos.id} data ={Infos} />;
        })}
      </section>
    </div>
  );
}

export default Category;
