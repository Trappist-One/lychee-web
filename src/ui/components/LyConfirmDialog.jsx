import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';
import { forwardRef, useState } from 'react';


const LyConfirmDialog = forwardRef((prop, ref) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleClose = () => {
    setOpen(false);
  };

  let callback = () => {
    console.log(777777777777);
  };
  
  const handleOk = () => {
    callback();
    setOpen(false)
  }

  if (ref) {
    ref.current = {
      setOpen,
      setTitle,
      setContent,
      callback
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="ly-confirm-dialog-title"
        aria-describedby="ly-confirm-dialog-description"
      >
        <DialogTitle id="ly-confirm-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="ly-confirm-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('取消')}</Button>
          <Button onClick={handleOk} autoFocus>{t('确认')}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

LyConfirmDialog.displayName = 'LyConfirmDialog'

export default LyConfirmDialog;