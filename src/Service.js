import Servicebox from "./Services/Servicebox";
import Servicehome from "./Services/Servicehome";
import ServiceFolder from "./Services/ServiceFolder";
import Servicegroup from "./Services/Servicegroup";
import Servicelast from "./Services/Servicelast";
import Servicework from "./Services/Servicework";

const Service = () => {
    return ( 
        <div>
           <Servicehome/>
           <Servicebox/>
           <ServiceFolder/>
           <Servicegroup/>
           <Servicelast/>
           <Servicework/>
        </div>
     );
}
 
export default Service;