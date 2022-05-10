import React, {FunctionComponent, useState} from 'react';
import RHFRangePicker from "../components/RHFRangePicker";
import {useForm} from "react-hook-form";
import {Button} from "devextreme-react/button";
import ReactJson from "react-json-view";

interface OwnProps {
}

type Props = OwnProps;

type FormValues = {
    rhfRangePicker: string;
};

const initialFormState = {}

const RHFControls: FunctionComponent<Props> = (props) => {
    const form = useForm<FormValues>({
        defaultValues: {...initialFormState},
        //mode: "onChange"
    });

    const [formData, setFormData] = useState({});

    const onSubmit = (data: FormValues) => {
        // console.log(data);
        setFormData(data);
    };

    const resetForm = () => {
        form.reset();
        setFormData({...initialFormState})
    }


    return (
        <React.Fragment>
            <h1>RHF Controls</h1>


            <form onSubmit={form.handleSubmit(onSubmit)}>
                <h4>DatePicker:</h4>

                <RHFRangePicker
                    type={'datetime'}
                    displayFormat={'yyyy-MM-dd HH:mm:ss'}
                    separator={'to'}
                    control={form.control}
                    name="rhfRangePicker"
                    rules={{
                        required: {value: true, message: 'The Range Picker is required!'},
                        validate: {
                            startDateRequired: value => {
                                if (!value?.[0]) {
                                    return 'Start Date is required!'
                                }
                            },
                            endDateRequired: value => {
                                if (!value?.[1]) {
                                    return 'End Date is required!'
                                }
                            }
                        }
                    }}
                />

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 8, marginTop: 16}}>

                    <Button text={'Submit'} useSubmitBehavior={true} type={'default'}/>

                    <Button text={'Reset'} onClick={resetForm}/>
                </div>
            </form>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 8, marginTop: 16}}>
                <ReactJson src={formData} />
            </div>

        </React.Fragment>
    );
};

export default RHFControls;
