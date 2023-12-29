import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create actions for 
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://65857c64022766bcb8c8bd82.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const result = await response.json(); // Corrected typo here
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Update actions for 
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    const response = await fetch(`https://65857c64022766bcb8c8bd82.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const result = await response.json(); // Corrected typo here
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Read action
export const showUser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
    const response = await fetch('https://65857c64022766bcb8c8bd82.mockapi.io/crud');

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://65857c64022766bcb8c8bd82.mockapi.io/crud/${id}`, { method: 'DELETE' });
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: []
    },
    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload;

        },
    },
    extraReducers: (builder) => {
        builder
            // for create==============================
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })// for update==========================
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((ele) => (ele.id === action.payload.id ? action.payload : ele))
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })//for show user
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })//for delete user
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {

                state.loading = false;
                const { id } = action.payload;
                // console.log("Delete action fulfilled. ID:", id);
                // console.log("Response from server:", action.payload);
                // eslint-disable-next-line no-restricted-globals
                if (confirm("Do you want to delete this user?")) {
                    if (id) {
                        state.users = state.users.filter((ele) => ele.id !== id);
                    }
                }

            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userDetail.reducer;
export const { searchUser } = userDetail.actions;
