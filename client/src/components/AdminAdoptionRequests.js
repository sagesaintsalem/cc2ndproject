import {useState, useEffect} from 'react'
import AdminSingleAdoptionrequest from './AdminSingleAdoptionrequest';
import styled from 'styled-components';

const StRequests = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 590px;
  margin-right: 50px;
`

const RequestsView = styled.div`
  margin-top: 1em;
`
const ListFix = styled.ul`
  list-style: none;
  line-height: 30px;
  padding: 0;
`




const AdminAdoptionRequests = ({adoptionRequests, handleArchive}) => {


    // states for dropdown menu
    const [chosenCategory, setChosenCategory] = useState('pick category')
    const [dataOfAdoptionrequestDisplay, setDataOfAdoptionrequestDisplay] = useState([]);
    // const [adoptionTypeToDisplay, setAdoptionTypeToDisplay] = useState('');

    // mapping though adoption request api
  const singleRequestNodes = singleRequest => {
    return <AdminSingleAdoptionrequest
    key = {singleRequest.id}
    singleRequest = {singleRequest}
    handleArchive = {handleArchive}
    />

  }

  // total open adoption request counter
  const total = adoptionRequests.length;
  const archivedCounter = adoptionRequests.filter((request) =>  request.archived).length
  const openCounter = adoptionRequests.filter((request) =>  !request.archived).length

  // filter different adoption requests
  const mapDataToNode = (dataObject) => {
    return singleRequestNodes(dataObject);
  }
  const nodesToDisplay = dataOfAdoptionrequestDisplay.map(mapDataToNode);

  // when option is selected the states go to true so they can be rendered
  useEffect(() => {

    // all adoptionrequests
    if (chosenCategory === 'allRequests') {
      // setDataOfAdoptionrequestDisplay('request');
      setDataOfAdoptionrequestDisplay(adoptionRequests);
      console.log(adoptionRequests);
      // all Not archived requests
    } else if (chosenCategory === 'openRequests') {
      const filteredRequests = adoptionRequests.filter(adoptionRequest => !adoptionRequest.archived)
      // setDataOfAdoptionrequestDisplay('request');
      setDataOfAdoptionrequestDisplay(filteredRequests);
      console.log(filteredRequests);

      // all archived requests
    } else if (chosenCategory === 'archivedRequests') {
      const filteredRequests = adoptionRequests.filter(adoptionRequest => adoptionRequest.archived)
      // setDataOfAdoptionrequestDisplay('request');
      setDataOfAdoptionrequestDisplay(filteredRequests);
      console.log(filteredRequests);

    }
    },[chosenCategory, adoptionRequests])
    // handle change for dropdown menu
    const handleChange = (e) => {
      setChosenCategory(e.target.value)
    }


  return (
    <StRequests>
        <h2>Adoption Requests</h2>
        <h3>the total of Archived requests is {archivedCounter}</h3>
        <h3>the total of open requests is {openCounter}</h3>
        
        <RequestsView>
          <h2>Pick what type of requests to view</h2>

          <select value={chosenCategory} onChange={handleChange}>
          <option value="selectCategory" >Select what you want to see</option>
          <option value='allRequests'>All Requests</option>
          <option value='openRequests'>Open Requests</option>
          <option value='archivedRequests'>ArchivedRequests</option>
          </select>
          <ListFix>
            {nodesToDisplay}
          </ListFix>
        </RequestsView> 
    </StRequests>
  )
}
export default AdminAdoptionRequests
