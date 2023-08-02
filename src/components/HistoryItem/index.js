import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="bg-item-container">
      <div className="card-item-container">
        <p className="time">{timeAccessed}</p>
        <div className="item-card">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-card">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="button"
        type="button"
        onClick={onRemoveHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default HistoryItem
