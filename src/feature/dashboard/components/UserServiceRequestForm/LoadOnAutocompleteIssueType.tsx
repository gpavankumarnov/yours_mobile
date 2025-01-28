import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import LoadOnAutoCompleteWrapper from "../../../../common/components/form-wrapper/LoadOnAutoCompleteWrapper";
import { useAppDispatch, useAppSelector } from "../../../../core/stateManagement/hooks";
import { UserService } from "../../model/UserService";
import { fetchAllIssueTypes, selectIssueTypeIsFetchError, selectIssueTypeIsFetching, selectIssueTypes } from "../../store/referenceData/IssueTypeSlice";

const LoadOnAutocompleteIssueType = () => {
    const {formState:{errors}} = useFormContext<UserService>();
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectIssueTypeIsFetching)
    const isError = useAppSelector(selectIssueTypeIsFetchError)
    const data = useAppSelector(selectIssueTypes)

   const [open, setOpen] = useState<boolean>(false);

   console.log("open ", open);
   

useEffect(()=>{
  if(open){
     dispatch(fetchAllIssueTypes())
  }
}, [open])

    // const options =  [
    //     { id: '2', label: 'Charger Related Issue', disabled:false },
    //     { id: '1', label: 'Battery Issue',disabled:false },
    //     { id: '3', label: 'Display Issue', disabled:false }
    //   ]

  return (
        <LoadOnAutoCompleteWrapper 
        name="issue" 
        label="IssueType"
        helperText={errors.issue ? "issue type is required" : ""}
        rules={{required:true}}
        isRequired={true}  
        error={!!errors.issue}     
        open={open}
        options={data}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        isLoading={isLoading} 
        isError={isError}  // add this line to show error message when fetch data is failed.
        />
      
  )
}

export default LoadOnAutocompleteIssueType
