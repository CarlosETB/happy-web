import { ChangeEvent } from "react";

// Native
import { LeafletMouseEvent } from 'leaflet'

export default (setFormData?: any) => {

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((formData?: any) => { return { ...formData, [name]: value } });
  };

  const handleTextAreaChange = async (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((formData?: any) => { return { ...formData, [name]: value } });
  };

  
  const handleMapClick = async (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng

    setFormData((formData?: any) => { 
        return { ...formData, 'latitude': lat, 'longitude': lng }
    });
  }

  const handleOption = async (event: any) => {
    if(event.target.name === 'true') {
      setFormData((formData?: any) => { return { ...formData, 'open_on_weekends': true } });
    }
    if(event.target.name === 'false') {
      setFormData((formData?: any) => { return { ...formData, 'open_on_weekends': false } });
    }
  }

  return {
    handleOption,
    handleMapClick,
    handleInputChange,
    handleTextAreaChange,
  };
};