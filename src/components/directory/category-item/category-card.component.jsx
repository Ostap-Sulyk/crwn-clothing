import './category-card.styles.scss';

const CategoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div className="category-container" key={id}>
      <div className="background-image" style={
        {
          backgroundImage: `url(${imageUrl})`
        }
      }></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default CategoryItem;
