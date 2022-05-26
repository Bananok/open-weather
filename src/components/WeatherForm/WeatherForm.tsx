import React from "react";

import {
  Controller,
  ErrorOption,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { actions, selectors, useAppDispatch, useAppSelector } from "store";
import styled from "styled-components";

import { Button, Input } from "../UI";

interface FormInputs {
  city: string;
}

const WeatherForm: React.FC<WeatherFormProps> = () => {
  const cordinates = useAppSelector(selectors.weather.getCoordinates);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    setError,
    control,
    formState: { isValid },
  } = useForm<FormInputs>({
    mode: "all",
  });
  const onSubmit: SubmitHandler<FormInputs> = async ({ city }) => {
    const { payload, meta } = await dispatch(
      actions.weather.getCoordinatesThunk(city)
    );
    if (meta.requestStatus === "rejected") {
      return setError("city", payload as ErrorOption);
    }
    await dispatch(actions.weather.getWeatherThunk(cordinates));
  };

  return (
    <Root>
      <CityForm onSubmit={handleSubmit(onSubmit)}>
        <CityInput>
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange }, fieldState }) => (
              <Input
                type="text"
                placeholder="City name"
                fieldState={fieldState}
                onChange={onChange}
              />
            )}
          />
        </CityInput>
        <ButtonForm>
          <Button value="Search" disabled={!isValid} />
        </ButtonForm>
      </CityForm>
      <Button
        onClick={() => dispatch(actions.weather.getWeatherThunk(cordinates))}
        value="refresh"
      />
    </Root>
  );
};
interface WeatherFormProps {}

export default WeatherForm;

const Root = styled.div`
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
`;
const CityForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const CityInput = styled.div`
  width: 300px;
  height: max-content;
`;
const ButtonForm = styled.div`
  padding-left: 100px;
`;
